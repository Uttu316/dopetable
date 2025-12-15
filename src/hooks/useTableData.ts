import { useEffect, useState } from "react";
import type { Character } from "../components/types";
import { generateMockData } from "../utils";
import { fetchCharacters } from "../services";

export function useTableData() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverFailed, setServerFailed] = useState(false);
  const [useLocalData, setUseLocalData] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const doFetch = async () => {
      try {
        const res = await fetchCharacters();
        if (!mounted) return;
        setData(res);
        setServerFailed(false);
        setUseLocalData(false);
      } catch (err) {
        if (!mounted) return;
        setServerFailed(true);
        const useLocal = window.confirm(
          "Failed to fetch data from server. Use local data instead?"
        );
        if (useLocal) {
          setUseLocalData(true);
          setData(generateMockData());
        }
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    };
    doFetch();
    return () => {
      mounted = false;
    };
  }, []);

  const toggleUseLocalData = async (force?: boolean) => {
    if (force === true) {
      setUseLocalData(true);
      setData(generateMockData());
      return;
    }

    if (useLocalData) {
      setLoading(true);
      try {
        const res = await fetchCharacters();
        setData(res);
        setUseLocalData(false);
        setServerFailed(false);
      } catch (err) {
        window.alert("Still unable to reach server. Staying on local data.");
      } finally {
        setLoading(false);
      }
    } else {
      setUseLocalData(true);
      setData(generateMockData());
    }
  };

  return {
    data,
    setData,
    loading,
    serverFailed,
    useLocalData,
    toggleUseLocalData,
  } as const;
}

export default useTableData;
