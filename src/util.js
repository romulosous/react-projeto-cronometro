const maybeDefault = (module) => {

  if (typeof module === "object") {

    module = module.default;
  }

  return module;
}

export { maybeDefault }

