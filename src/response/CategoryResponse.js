import { listRoute } from "../constants/list_route";

var index = 1;
export class CustomerResponse {
    constructor({ data, current_page, limit, total }) {
        this.data = (data || []).map((item, index) => {
            return new CustomerItem({ ...item, index: index + 1 });
        })

        this.currentPage = current_page;
        this.limit = limit;
        this.total = total;
    }

}

class CustomerItem {

    constructor({ index, id, name, parent_id, line_age, image, createdAt, updatedAt }) {

        this.index = index;
        this.key = id || "";
        this.id = id || "";
        this.name = name || "";
        this.parent_id = parent_id || "";
        this.line_age = line_age || "";
        this.image = `${listRoute.UPLOAD}/${image}` || "";
        this.createdAt = new Date(createdAt).toLocaleDateString() || "";
        this.updatedAt = new Date(updatedAt).toLocaleDateString() || "";
    }



}

