<template>

  <div id="home" class="container my-5">

    <form class="form-horizontal">
      <div class="table-responsive">
        <table class="table table-bordered table-striped table-highlight">
          <thead>
          <th>

          </th>
          <th>Disk 1</th>
          <th>Disk 2</th>
          <th>Disk 3</th>

          </thead>
          <tbody>
<!--          Campos requeridos rpm, average-seek, max_transfer-->
          <tr>
            <td>Nombre</td>
            <td><input type="text" class="form-control" v-model="disk1.name" value="Disk 1"/></td>
            <td><input type="text" class="form-control" v-model="disk2.name" value="Disk 2"/></td>
            <td><input type="text" class="form-control" v-model="disk3.name" value="Disk 3"/></td>
          </tr>
          <tr>
            <td>RPM</td>
            <td><input v-model="disk1.rpm" type="number" min="0" max="30000" oninput="validity.valid||(value='');" class="form-control" placeholder="6200 rpm" required/> </td>
            <td><input v-model="disk2.rpm" type="number" min="0" max="30000" oninput="validity.valid||(value='');" class="form-control" placeholder="7300 rpm" required/></td>
            <td><input v-model="disk3.rpm" type="number" min="0" max="30000" oninput="validity.valid||(value='');" class="form-control" placeholder="15000 rpm" required/></td>
          </tr>
          <tr>
            <td>Average seek</td>
            <td><input v-model="disk1.average_seek" type="number" min="0" max="50" oninput="validity.valid||(value='');" class="form-control" placeholder="4 ms" required/></td>
            <td><input v-model="disk2.average_seek" type="number" min="0" max="50" oninput="validity.valid||(value='');" class="form-control" placeholder="9 ms" required/></td>
            <td><input v-model="disk3.average_seek" type="number" min="0" max="50" oninput="validity.valid||(value='');" class="form-control" placeholder="12 ms" required/></td>
          </tr>
          <tr>
            <td>Max transfer</td>
            <td><input v-model="disk1.max_transfer" type="number" min="0" max="1000" oninput="validity.valid||(value='');" class="form-control" placeholder="125 MB/s" required/></td>
            <td><input v-model="disk2.max_transfer" type="number" min="0" max="1000" oninput="validity.valid||(value='');" class="form-control" placeholder="105 MB/s" required/></td>
            <td><input v-model="disk3.max_transfer" type="number" min="0" max="1000" oninput="validity.valid||(value='');" class="form-control" placeholder="84 MB/s" required/></td>
          </tr>
          <tr>
            <td>Platters</td>
            <td><input v-model="disk1.platters" type="number" min="0" max="10" oninput="validity.valid||(value='');" class="form-control" placeholder="6" /></td>
            <td><input v-model="disk2.platters" type="number" min="0" max="10" oninput="validity.valid||(value='');" class="form-control" placeholder="5" /></td>
            <td><input v-model="disk3.platters" type="number" min="0" max="10" oninput="validity.valid||(value='');" class="form-control" placeholder="4" /></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button type="button" class="btn btn-success" @click="calcule" style="float: right;">Calcule</button>
      </div>

      <div>
        <b-modal v-model="showModal" id="modal-xl" cancel-disabled="false" size="xl" title="Calculated results">
          <table class="table table-bordered ">
            <thead>
            <tr>
              <th colspan="2">Disk</th>
              <th>{{disk1.name}}</th>
              <th>{{disk2.name}}</th>
              <th>{{disk3.name}}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td colspan="2">T seek</td>
              <td style="font-style: italic">{{disk1.result.Tseek}} ms</td>
              <td style="font-style: italic">{{disk2.result.Tseek}} ms</td>
              <td style="font-style: italic">{{disk3.result.Tseek}} ms</td>
            </tr>
            <tr>
              <td colspan="2">T rotation</td>
              <td style="font-style: italic">{{disk1.result.Trotation}} ms</td>
              <td style="font-style: italic">{{disk2.result.Trotation}} ms</td>
              <td style="font-style: italic">{{disk3.result.Trotation}} ms</td>
            </tr>
            <tr>
              <td rowspan="3">Random</td>
              <td>Ttransfer</td>
              <td style="font-style: italic">{{disk1.result.random.Ttransfer}} ms</td>
              <td style="font-style: italic">{{disk2.result.random.Ttransfer}} ms</td>
              <td style="font-style: italic">{{disk3.result.random.Ttransfer}} ms</td>
            </tr>
            <tr>
              <td>Ti/o</td>
              <td style="font-style: italic">{{disk1.result.random.Tio}} ms</td>
              <td style="font-style: italic">{{disk2.result.random.Tio}} ms</td>
              <td style="font-style: italic">{{disk3.result.random.Tio}} ms</td>
            </tr>
            <tr>
              <td>Rio</td>
              <td style="font-style: italic">{{disk1.result.random.Rio}} MB/s</td>
              <td style="font-style: italic">{{disk2.result.random.Rio}} MB/s</td>
              <td style="font-style: italic">{{disk3.result.random.Rio}} MB/s</td>
            </tr>
            <tr>
              <td rowspan="3">Secuential</td>
              <td>Ttransfer</td>
              <td style="font-style: italic">{{disk1.result.secuential.Ttransfer}} ms</td>
              <td style="font-style: italic">{{disk2.result.secuential.Ttransfer}} ms</td>
              <td style="font-style: italic">{{disk3.result.secuential.Ttransfer}} ms</td>
            </tr>
            <tr>
              <td>Tio</td>
              <td style="font-style: italic">{{disk1.result.secuential.Tio}} ms</td>
              <td style="font-style: italic">{{disk2.result.secuential.Tio}} ms</td>
              <td style="font-style: italic">{{disk3.result.secuential.Tio}} ms</td>
            </tr>
            <tr>
              <td>Rio</td>
              <td style="font-style: italic">{{disk1.result.secuential.Rio}} MB/s</td>
              <td style="font-style: italic">{{disk2.result.secuential.Rio}} MB/s</td>
              <td style="font-style: italic">{{disk3.result.secuential.Rio}} MB/s</td>
            </tr>
            </tbody>
          </table>
          <template #modal-footer="{ ok }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button  variant="success" @click="ok()">
              OK
            </b-button>

          </template>
        </b-modal>
      </div>
    </form>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components:{
  },
  data(){
    return{
      showModal: false,
      disk1:{
        name: "Disk 1",
        capacity: 22,
        rpm:1,
        average_seek: 1,
        max_transfer: 1,
        platters: 0,
        cache: 0,
        result:{
          random:{},
          secuential:{}
        }
     },
      disk2:{
        name: "Cheetah",
        capacity: 22,
        rpm:15000,
        average_seek: 4,
        max_transfer: 125,
        platters: 4,
        cache: 16,
        result:{
          random:{},
          secuential:{}
        }
     },
      disk3:{
        name: "Barracuda",
        capacity: 800,
        rpm: 7200,
        average_seek:9 ,
        max_transfer: 105,
        platters: 4,
        cache: 32,
        result:{
          random:{},
          secuential:{}
        },
        arr:[]
      }
    }
  },
 methods:{
   calcule(){
  fetch('https://storage-sim-back.herokuapp.com/api/disk/compare/',{
    method:'POST',
    body:JSON.stringify([this.disk1,this.disk2,this.disk3]),
    headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
  }).then(res => res.json()).then(data =>{
    this.showModal=true
    console.log(data.result[0])
    this.disk1.result=data.result[0]
    this.disk2.result=data.result[1]
    this.disk3.result=data.result[2]
    this.arr=[this.disk1,this.disk2,this.disk3]
  });

}},
 mounted(){
 }
}
</script>
<style >

</style>

