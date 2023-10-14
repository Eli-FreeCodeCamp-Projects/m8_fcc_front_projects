import {ut} from "./utils.js";

export class TweeterHelper{
    static getShareLink(hashtags, related, text){
        if(!ut.isStrNotEmpty(hashtags)){
            throw new Error("Error: Unable to show social tweeter icon. Hashtags value must be a not empty string.")
        }
        if(!ut.isStrNotEmpty(related)){
            throw new Error("Error: Unable to show social tweeter icon. Related value must be a not empty string.")
        }
        if(!ut.isStrNotEmpty(text)){
            throw new Error("Error: Unable to show social tweeter icon. Text to share must be a not empty string.")
        }
        let result = `https://twitter.com/intent/tweet?`
        result += `hashtags=${encodeURIComponent(hashtags)}&related=${encodeURIComponent(related)}`
        result += `&text=${encodeURIComponent(text)}`
        return result;
    }
}


export class TumblrHelper{
    static getShareLink(postType, tags, caption, content){
        if(!ut.isStrNotEmpty(postType)){
            throw new Error("Error: Unable to show social Tumblr icon. Post Type value must be a not empty string.")
        }
        if(!ut.isStrNotEmpty(tags)){
            throw new Error("Error: Unable to show social Tumblr icon. Tags value must be a not empty string.")
        }
        if(!ut.isStrNotEmpty(caption)){
            throw new Error("Error: Unable to show social Tumblr icon. Caption value must be a not empty string.")
        }
        if(!ut.isStrNotEmpty(content)){
            throw new Error("Error: Unable to show social Tumblr icon. Content value must be a not empty string.")
        }
        let result = `https://www.tumblr.com/widgets/share/tool?`
        result += `posttype=${encodeURIComponent(postType)}&tags=${encodeURIComponent(tags)}`
        result += `&caption=${encodeURIComponent(caption)}&content=${encodeURIComponent(content)}`
        result += `&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
        return result
    }
}