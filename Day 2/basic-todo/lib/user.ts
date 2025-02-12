import prisma from "./prisma";

export async function getUsers() {
    return await prisma.user.findMany({
        include: {
            todos: true,
        },
    });
}

export async function createUser(data: { name: string; email: string; password: string }) {
    return await prisma.user.create({
        data
    })
}