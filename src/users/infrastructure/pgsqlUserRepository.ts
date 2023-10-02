import { db } from "../../database/db";
import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class MysqlUserRepository implements userRepository {
    async register(uuid: string, name: string, lastName: string, email: string, tel: string, status: boolean, password: string): Promise<User | null> {
        try {
            const result = await db.oneOrNone(
                'INSERT INTO users(uuid, name, last_name, tel, email, password, status) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [uuid, name, lastName, tel, email, password, status]
            );

            if (result) {
                return new User(result.uuid, result.name, result.last_name, result.email, result.tel, result.status, result.password);
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error registering user:', error);
            return null;
        }
    }

   async update(uuid: string, name?: string | undefined, lastName?: string | undefined, tel?: string | undefined, email?: string | undefined): Promise<User | null> {
    try {
        if (!name && !lastName && !tel && !email) {
            throw new Error("No fields to update.");
        }

        const updateFields: string[] = [];
        const params: any[] = [];

        if (name) {
            updateFields.push("name = $1");
            params.push(name);
        }

        if (lastName) {
            updateFields.push("last_name = $2"); // Columna adaptada a PostgreSQL
            params.push(lastName);
        }

        if (tel) {
            updateFields.push("tel = $3");
            params.push(tel);
        }

        if (email) {
            updateFields.push("email = $4");
            params.push(email);
        }

        params.push(uuid);

        const sql = `UPDATE users SET ${updateFields.join(", ")} WHERE uuid = $5`;

        const result = await db.result(sql, params); // Usamos db.result para obtener el número de filas afectadas

        if (result.rowCount > 0) {
            const updatedUser = await this.getById(uuid);
            return updatedUser;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating user:", error);
        return null;
    }
}
async getById(uuid: string): Promise<User | null> {
    try {
        const sql = "SELECT * FROM users WHERE uuid = $1";

        const result = await db.oneOrNone(sql, [uuid]);

        if (result) {
            return new User(result.uuid, result.name, result.last_name, result.email, result.tel, result.status, result.password);
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user by UUID:", error);
        return null;
    }
}
async allUsers(): Promise<User[] | null> {
    try {
        const sql = "SELECT * FROM users";
        const result = await db.manyOrNone(sql);

        if (result && result.length > 0) {
            return result.map((user: any) => new User(user.uuid, user.name, user.last_name, user.email, user.tel, user.status, user.password));
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching all users:", error);
        return null;
    }
}

async deleteUser(uuid: string): Promise<string | null> {
    try {
        const sql = "DELETE FROM users WHERE uuid = $1";
        const result = await db.result(sql, [uuid], (r) => r.rowCount);

        if (result === 1) {
            return "User deleted successfully";
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        return null;
    }
}

async updatePassword(uuid: string, password: string): Promise<User | null> {
    try {
        const sql = "UPDATE users SET password = $1 WHERE uuid = $2";
        const result = await db.result(sql, [password, uuid], (r) => r.rowCount);

        if (result === 1) {
            const updatedUser = await this.getById(uuid);
            return updatedUser;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error updating password:", error);
        return null;
    }
}

}
    
