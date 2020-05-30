/* eslint-disable prettier/prettier */

/**
 * 是否拥有class
 * @param el
 * @param className
 * @returns {boolean}
 */
export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

/**
 * 添加class
 * @param el
 * @param className
 */
export function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }

    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

/**
 * 删除class
 * @param el
 * @param className
 */
export function removeClass(el, className) {
    if (!hasClass(el, className)) {
        return
    }

    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

/**
 * 设置或获取自定义属性
 * @param el
 * @param name
 * @param val
 * @returns {string|null}
 */
export function getData(el, name, val) {
    let prefix = 'data-'
    if (val) {
        return el.setAttribute(prefix + name, val)
    }
    return el.getAttribute(prefix + name)
}

/**
 * 拼接url参数
 * */
export const joinUrlParams = (url, oParams) => {
    const keys = Object.keys(oParams);
    const _array = keys.map((o) => {
        return `${o}=${oParams[o]}`;
    });
    const paramStr = _array.join('&');
    return `${url}${url.indexOf('?') === -1 ? '?' : '&'}${paramStr}`;
}
/*
* 日期格式2019/12/12 12:21:05
*/
export const timeFormat = date => {
    const formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
