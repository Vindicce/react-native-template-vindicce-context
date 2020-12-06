interface IInitialFactory {
  showName(): void;
}

export function createInitialFactory(): IInitialFactory {
  function showName(): void {
    return console.log(`createInitial`);
  }

  return {
    showName,
  };
}
