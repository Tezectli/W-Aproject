import { MessageBox } from 'element-ui';
export default {
    install(Vue, options) {
        Vue.prototype.confirm = (params) => {
            MessageBox
                .confirm(params.content, params.tip || "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                .then(() => {
                    // root.$message({
                    //     type: "success",
                    //     message: "删除成功!"
                    // });
                    //当&&符号前置位true就会执行后面的函数 如果前面为flase就不会执行
                    params.fn && params.fn(params.id)
                        // if (params.fn) { params.fn() }

                })
                .catch(() => {
                    root.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });

        }
    }
}