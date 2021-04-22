import request from "utils/request";

class Users {
  private static _instance: Users;

  private constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  async getUserList() {
    const res = await request.get("/api/users");
    return res.data;
  }

  deleteUser(id: number) {
    return request.delete(`/api/users/${id}`);
  }
}

export default Users.Instance;
