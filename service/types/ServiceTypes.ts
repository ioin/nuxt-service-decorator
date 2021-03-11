import Axios, { AxiosResponse } from 'axios'
import { Store as VueStore } from 'vuex'
export interface ServiceModule {
    prototype: any;
    $axios: typeof Axios
    $store: VueStore<any>
    $prefix?: string;
}

export type MethodDeclare = {
    $sends: Send[],
    $store: Store[],
    $config: MethodConfig
} & CallableFunction

export type MethodConfig = {
    url: number
}

export type Store = {
    keyChain: string[];
    storeKey: string,
    name: string;
    defaultValue?: any
}

export type Send = {
    name: string;
    defaultValue?: any;
}

export type AxiosRequest = (axios: typeof Axios, fullurl: string, params: any) => AxiosResponse