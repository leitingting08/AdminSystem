import Alert from './alert.jsx';


let alertInstance = 0;
let getalertInstance = (tips) => {
    alertInstance = alertInstance || Alert.newInstance({
        tips
    });
    return alertInstance;
};

let defaultTips = {title:'提示',content:'确定',btn:['确定'],yes:function(){},no:function(){}}
export default {
    open(tips = defaultTips) {
        getalertInstance(tips);
        tips.yes = function(){
            alertInstance.destroy();
            alertInstance = null;
        }
        tips.no = function(){
            alertInstance.destroy();
            alertInstance = null;
        }
    },
    close() {
        if (alertInstance) {
            alertInstance.destroy();
            alertInstance = null;
        }
    },
};