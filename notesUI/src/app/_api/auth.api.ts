import ApiService from '../_services/api.services';
import BaseControllerResponse from '../utils/BaseCtrl';

class Apiauth extends BaseControllerResponse {

    login = async (formData: any) => {
        try {
            const response = await new ApiService().post("/login", formData);
            this.handleResponse(response);
            return response;
        } catch (err) {
            return this.handleResponse(err);
        }
    }

    AddNotes = async (formData: any) => {
        try {
            const response = await new ApiService().post("/dashboard/add", formData);
            this.handleResponse(response);
            return response;
        } catch (err) {
            return this.handleResponse(err);
        }
    }

    DeleteNotes = async (id: any) => {
        try {
            const response = await new ApiService().delete(`/dashboard/delete/${id}`);
            this.handleResponse(response);
            return response;
        } catch (err) {
            return this.handleResponse(err);
        }
    }

    EditNotes = async (id: any, formData: any) => {
        try {
            const response = await new ApiService().put(`/dashboard/edit/${id}`, formData);
            this.handleResponse(response);
            return response;
        } catch (err) {
            return this.handleResponse(err);
        }
    }

}

export default Apiauth;