/*
 * @Author: Royal
 * @LastEditTime: 2022-07-15 11:08:34
 * @Description: 
 * @FilePath: /myindex/src/components/appconfig.ts
 */
import { reactive, shallowReactive } from "vue";

// 系统设置
type loginOption = {
    user_name:string,
    user_password?:string,
}

let appconfig=reactive({
    start_time:2000,
    if_logo_show:true,
    start_menu_logo:'default',
    backimg:'default',
    login:<loginOption|null>null
})

/**
 * @description: 初始化设置过程
 * 本地存储配置 > 自定义配置 > 默认配置
 */
function initConfig(params:Partial<typeof appconfig>) {
    Object.assign(appconfig,params)
    // console.log(appconfig)
    // if(isLocalConfig){
    //     Object.assign(appconfig,localConfig)
    // }
}
/**
 * @description: 设置配置
 */
function setConfig<K extends keyof (typeof appconfig)>(key:K,params:(typeof appconfig)[K])  {
    appconfig[key]=params
}
/**
 * @description: 存储配置到本地
 */
function storeConfig() {  
    let temp: Partial<typeof appconfig> = JSON.parse(JSON.stringify(appconfig));
    temp.login=undefined; //去除login的存储

    localStorage.setItem('appconfig',JSON.stringify(temp))
}

/**
 * @description: 清空本地配置存储
 */
function clearStoreConfig() {
    localStorage.clear()
}
type plug_option=Partial<typeof appconfig>
export {appconfig,
    initConfig,
    setConfig,
    storeConfig,

    clearStoreConfig,
    plug_option}