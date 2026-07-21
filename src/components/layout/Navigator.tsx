/**
 * Navigator Component
 *
 * Top navigation bar. Always fixed at the top of the viewport.
 * When scrolled past the hero banner, a background gradient fades in
 * via the `with-background` class.
 */

import ThemeToggle from '@components/theme/ThemeToggle';
import { RESERVED_ROUTES } from '@constants/router';
import { configuredSeriesSlugs, enabledSeriesSlugs, routers } from '@constants/site-config';
import { useScrollTrigger } from '@hooks/useScrollTrigger';
import { Icon } from '@iconify/react';
import { cn, filterNavItems } from '@lib/utils';
import { memo, useEffect } from 'react';
import { defaultLocale, localizedPath, resolveNavName, stripLocaleFromPath } from '@/i18n';
import DropdownNav from './DropdownNav';
import LanguageSwitcher from './LanguageSwitcher';
import { SearchTrigger } from './SearchDialog';

interface NavigatorProps {
  currentPath: string;
  locale?: string;
}

// Pre-filter navigation items at module load (config is static)
const filteredRouters = filterNavItems(routers, configuredSeriesSlugs, enabledSeriesSlugs, RESERVED_ROUTES);

// Icon component for navigation items - uses @iconify/react for dynamic icons
function NavIcon({ name }: { name: string }) {
  return <Icon icon={name} className="mr-1.5 h-4 w-4" />;
}

// Button link component
interface ButtonLinkProps {
  url: string;
  label: string;
  isActive: boolean;
  children: React.ReactNode;
}

function ButtonLink({ url, label, isActive, children }: ButtonLinkProps) {
  return (
    <a
      href={url}
      aria-label={label}
      className={cn(
        'relative flex items-center px-3 py-2 text-base tracking-wider',
        'after:absolute after:bottom-1 after:left-1/2 after:block after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300',
        'hover:after:w-9/12',
        isActive && 'after:w-9/12',
      )}
    >
      {children}
    </a>
  );
}

const Navigator = memo(function Navigator({ currentPath, locale = defaultLocale }: NavigatorProps) {
  const { isBeyond } = useScrollTrigger({
    triggerDistance: 0.45,
    throttleMs: 80,
  });

  const strippedPath = stripLocaleFromPath(currentPath);

  // Apply with-background class based on scroll position
  useEffect(() => {
    document.getElementById('site-header')?.classList.toggle('with-background', isBeyond);
  }, [isBeyond]);

  return (
    <div className="flex grow tablet:grow-0 items-center">
      {/* Desktop navigation */}
      <div className="flex tablet:hidden grow items-center">
        {filteredRouters.map((item) => {
          const displayName = resolveNavName(item.nameKey, item.name, locale);
          if (item.children?.length) {
            return <DropdownNav key={item.path ?? item.name} item={item} currentPath={currentPath} locale={locale} />;
          }
          if (!item.path || !displayName) return null;
          const localizedUrl = localizedPath(item.path, locale);
          return (
            <ButtonLink key={item.path} url={localizedUrl} label={displayName} isActive={item.path === strippedPath}>
              {item.icon && <NavIcon name={item.icon} />}
              {displayName}
            </ButtonLink>
          );
        })}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <SearchTrigger />
        <div className="tablet:hidden flex-center">
          <LanguageSwitcher locale={locale} />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
});

export default Navigator;
