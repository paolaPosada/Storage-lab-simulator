<template>
  <div id="home" class="container">
<form>
  <div class="form-row" >
    <div class="col-sm-3 mb-2">
      <h2>Nombre</h2> 
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" v-model="disk1.name" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
    <div class="form-row" >
    <div class="col-sm-3 mb-2">
      <h2>Nombre</h2> 
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" v-model="disk1.name" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
    <div class="form-row" >
    <div class="col-sm-3 mb-2">
      <h2>Nombre</h2> 
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
    <div class="form-row" >
    <div class="col-sm-3 mb-2">
      <h2>Nombre</h2> 
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
    <div class="form-row" >
    <div class="col-sm-3 mb-2">
      <h2>Nombre</h2> 
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
    <div class="form-row" >
    <div class="col-sm-3 mb-2">
      <h2>Nombre</h2> 
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
    <div class="form-row" >
    <div class="col-sm-3 mb-2">
      <h2>Nombre</h2> 
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-sm-4 mb-2">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <button class="btn btn-primary" @click="log()">Submit form</button>
</form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
     disk1:{
        name: "posada",
        capacity: 22,
        rpm: 22,
        average_seek: 0,
        max_transfer: 22,
        platters: 22,
        cache: 22
     },
      disk2:{
        name: "paola",
        capacity: 22,
        rpm: 22,
        average_seek: 22,
        max_transfer: 22,
        platters: 22,
        cache: 22
     }  
    }
  },
 methods:{
   getCoondition(){
  fetch('https://storage-sim-back.herokuapp.com/api/disk/compare/',{
    method:'POST',
    body:JSON.stringify([this.disk1,this.disk2]),
    headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
  }).then(res => res.json()).then(data => console.log(data));

},
log(){
  console.log(this.disk1)

 }},
 mounted(){
   this.getCoondition()
 }
}
</script>
<style >

</style>