import prisma from "./prisma";

export async function getTodos() {
    return await prisma.todo.findMany();
}

export async function createTodo(data: { title: string; description?: string; completed?: boolean; userId: string }) {
    return await prisma.todo.create({
        data: {
            title: data.title,
            description: data.description ?? null,
            completed: data.completed ?? false,
            user: { connect: { id: data.userId } },
        },
    });
}
