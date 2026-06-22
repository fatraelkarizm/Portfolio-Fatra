export const isTrustedUserEvent = (event) => event?.isTrusted === true;

export const onTrustedInteraction = (callback, events = ["pointerdown"]) => {
  const handler = (event) => {
    if (!isTrustedUserEvent(event)) return;
    callback(event);
    events.forEach((name) => window.removeEventListener(name, handler));
  };

  events.forEach((name) =>
    window.addEventListener(name, handler, { passive: true })
  );

  return () => {
    events.forEach((name) => window.removeEventListener(name, handler));
  };
};
