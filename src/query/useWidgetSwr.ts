import useSWR, { Fetcher } from 'swr';
import { getDataCharacters } from '../api';
import { URL_CHARACTER } from '../api/url';
import type { IData } from '../type';

interface IWidget {
    data: IData;
}

const fetcher: Fetcher<IWidget, string> = (url) => getDataCharacters(url);
export const useWidgetSwr = (params: string) => {
    const { data, error } = useSWR([`${URL_CHARACTER}${params}`], fetcher);

    return {
        data: data?.data,
        isLoading: !error && !data,
        isError: error,
        isValidating: true,
    };
};
