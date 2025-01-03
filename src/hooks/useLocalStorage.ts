const useLocalStorage = (key: string) => {
  const set = (value: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error?.message);
    }
  };

  const get = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error?.message);
      return undefined;
    }
  };

  const remove = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error?.message);
    }
  };

  return { set, get, remove };
};

export default useLocalStorage;
