import axios from "axios"

export default class SnapshotService{
    sendSnapshot(snapshot){
      axios.post("http://localhost:2000/img", snapshot)
      .then(console.log("success"));
    }
}