export const siteConfig = {
  name: "SSJCorp",
  title: "SSJCorp — Сайты и Telegram-боты под ключ",
  description: "Разрабатываем сайты под ключ по адекватным ценам и в сжатые сроки, создаём Telegram-ботов для бизнеса и занимаемся SEO-продвижением.",
  url: "https://purrfect0.github.io/ssjcorp",
  logo: "/logo.jpg",
  tagline: "Внимательны к деталям. Быстры в реализации.",
  navItems: [
    { label: "Главная", href: "#hero" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Telegram-боты", href: "#telegram" },
    { label: "Контакты", href: "#contacts" },
  ],
  hero: {
    kicker: "Веб-студия полного цикла",
    title: "Сайты и Telegram-боты, которые запускаются",
    highlightWord: "быстро",
    subtitle: "Разрабатываем сайты под ключ по адекватным ценам и в сжатые сроки, создаём Telegram-ботов для бизнеса и занимаемся SEO-продвижением — от идеи до запуска и роста.",
    services: [
      "Сайты под ключ",
      "Telegram-боты",
      "SEO-продвижение",
      "Быстрый запуск",
    ],
    ctaPrimary: {
      text: "Обсудить проект",
      href: "https://t.me/ssjcorp", // replace with actual telegram
    },
    ctaSecondary: {
      text: "Смотреть портфолио",
      href: "#portfolio",
    },
  },
  portfolio: {
    label: "01 —",
    title: "Портфолио",
    subtitle: "Сайты, которые мы уже сделали",
    placeholders: [
      { id: "01", title: "Проект 01", tag: "Landing Page", icon: "globe", description: "Быстрый продающий одностраничник с адаптивной версткой" },
      { id: "02", title: "Проект 02", tag: "Интернет-магазин", icon: "shopping-cart", description: "E-commerce платформа с высокой скоростью загрузки" },
      { id: "03", title: "Проект 03", tag: "Корпоративный сайт", icon: "building", description: "Представительский сайт компании с современным дизайном" },
      { id: "04", title: "Проект 04", tag: "Веб-приложение", icon: "code", description: "Интерактивный клиентский сервис на современном стеке" },
      { id: "05", title: "Проект 05", tag: "Telegram Mini App", icon: "smartphone", description: "Удобное веб-приложение прямо внутри мессенджера" },
      { id: "06", title: "Проект 06", tag: "Одностраничник", icon: "zap", description: "Конверсионная посадочная страница под рекламный трафик" },
    ],
  },
  telegram: {
    label: "02 —",
    title: "Telegram-боты",
    statusBadge: "В разработке",
    description: "Помогаем бизнесу автоматизировать общение с клиентами: боты для заказов, поддержки и рассылок. Раздел в разработке — скоро добавим примеры и подробности.",
    features: [
      "Боты для приема заказов и онлайн-оплаты",
      "Автоматизация службы поддержки 24/7",
      "Интеграция с CRM и сторонними сервисами",
      "Персональные рассылки и аналитика",
    ],
  },
  contacts: {
    telegram: "https://t.me/ssjcorp",
    email: "mailto:contact@ssjcorp.dev",
    github: "https://github.com/purrfect0/ssjcorp",
  },
  copyright: `© ${new Date().getFullYear()} SSJCorp. Все права защищены.`,
} as const;
