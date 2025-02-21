import ApiService from "../_services/api.services";

const API_INSTANCE = new ApiService();

class ApiRoutesCall {

    findGetNotes = async()=>{
        try {
            const response = await API_INSTANCE.get('/dashboard/getNotesList');
            return response.status === true ? response.data : null;
        }catch (err) {
            return null;
        }
    } 
 
}
export default ApiRoutesCall;