import LogoFull from "../../assets/logo-full.svg";

export default function MobileNav({ onMenuClick }) {
  return (
    <header className="relative h-14 flex items-center px-4 border-b bg-white">
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className="text-2xl"
      >
        ≡
      </button>

      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src={LogoFull}
          alt="Steady Pebbles"
          className="mobile-navbar-logo"
        />
      </div>
    </header>
  );
}
