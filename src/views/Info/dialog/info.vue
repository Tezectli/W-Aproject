<template>
  <!-- ********以下是of-clear的代码********** -->
  <!-- <el-dialog title="新增" :visible.sync="dialog_Info_flag" width="580px" @close="close">
    <el-form :model="form" ref="addInfoForm">
      <el-form-item label="分组选项" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择类别图标">
          <el-option label="选项一" value="shanghai"></el-option>
          <el-option label="选项二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公司名称" :label-width="formLabelWidth">
        <el-input v-model="form.t_name" autocomplete="off" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="招聘地点" :label-width="formLabelWidth">
        <el-input v-model="form.t_nandu" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="招聘时间" :label-width="formLabelWidth">
        <el-input v-model="form.t_fenzu" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="招聘详情" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.t_info" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit" :loading="submitLoding">确 定</el-button>
    </div>
  </el-dialog> -->
  <!-- ********以上是of-clear的代码********** -->

  <el-dialog title="新增" :visible.sync="dialog_Info_flag" width="580px" @close="close">
    <el-form :model="form" ref="addInfoForm">
      <el-form-item label="分组选项" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择类别图标">
          <el-option label="选项一" value="shanghai"></el-option>
          <el-option label="选项二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <!-- SPMC -->
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="form.t_name" autocomplete="off" style="width:200px"></el-input>
      </el-form-item>
      <!-- SPJG -->
      <el-form-item label="商品价格" :label-width="formLabelWidth">
        <el-input v-model="form.t_nandu" autocomplete="off"></el-input>
      </el-form-item>
      <!-- SPKC -->
      <el-form-item label="商品库存" :label-width="formLabelWidth">
        <el-input v-model="form.t_fenzu" autocomplete="off"></el-input>
      </el-form-item>
      <!-- SPXQ -->
      <el-form-item label="商品详情" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.t_info" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit" :loading="submitLoding">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { AddInfo, GetList } from "@/api/news";
import { reactive, ref, watchEffect } from "@vue/composition-api";
import qs from "qs";
export default {
  name: "dialogInfo",
  //父组件-->子组件通过属性传参 数据为单项数据流 不能反向修改
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, root }) {
    const dialog_Info_flag = ref(false);
    const formLabelWidth = ref("70px");
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    watchEffect(() => {
      console.log(props.flag);

      dialog_Info_flag.value = props.flag;
      //   console.log(dialog_Info_flag.value);
      //   console.log(111);
    });
    const submitLoding = ref(false);
    const close = () => {
      dialog_Info_flag.value = false;
      emit("update:flag", false);
      console.log(222222);
    };
    //重置表单方法
    const resetForm = () => {
      form.t_name = "";
      form.t_nandu = "";
      form.t_fenzu = "";
      form.t_info = "";
    };
    const submit = () => {
      //以下为提交信息模块
      console.log("submit方法激活");
      let requestData = {
        t_name: form.t_name,
        t_nandu: form.t_nandu,
        t_fenzu: form.t_fenzu,
        t_info: form.t_info
      };
      let postData = qs.stringify({
        t_name: form.t_name,
        t_nandu: form.t_nandu,
        t_fenzu: form.t_fenzu,
        t_info: form.t_info
      });
      //判断是否为空
      if (!form.t_name) {
        root.$message({
          message: "商品名称不能为空！",
          type: "error"
        });
        return false;
      }
      submitLoding.value = true;
      AddInfo(postData)
        .then(response => {
          console.log(response.data);
          submitLoding.value = false;
          // root.$refs.addInfoForm.resetFields();
          emit("emitgetlist2");
          // resetForm();
          close();
        })
        .catch(error => {
          submitLoding.value = false;
        });
      emit("emitgetlist2");
    };
    return {
      dialog_Info_flag,
      form,
      formLabelWidth,
      close,
      submit,
      submitLoding,
      resetForm
    };
  }
  //   watch: {
  //     flag: {
  //       handler(newValue, oldValue) {
  //         this.dialog_Info_flag = newValue;
  //         console.log(newValue);
  //       }
  //     }
  //   }
};
</script>
<style scoped>
</style>