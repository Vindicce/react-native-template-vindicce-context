export const useInitialFactory = () => {
  function showName(): void {
    return console.log(`createInitial`);
  }

  return {
    showName,
  };
};
