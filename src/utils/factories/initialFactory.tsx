interface IInitialFactory {
  showName(): void;
}

function createInitial(): IInitialFactory {
  function showName(): void {
    return console.log(`createInitial`);
  }

  return {
    showName,
  };
}

export { createInitial };
