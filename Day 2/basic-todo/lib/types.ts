export type Todo = {
    id: string;     // UUID (string in Prisma)
    title: string;
    description?: string | null;
    completed: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
};