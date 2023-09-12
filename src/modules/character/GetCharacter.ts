import { Character } from '@prisma/client'
import { prisma } from '../../utils/prisma.client'
import { AppError } from '../../config/error'
export default class GetCharacter {
    async getAll(): Promise<Character[]> {
        const response = await prisma.character.findMany()
        return response
    }
    async getOneByName({ Nome }: Pick<Character, 'Nome'>): Promise<Character> {
        const response = await prisma.character.findFirst({where: {Nome}})
        if (!response) throw new AppError('Não encontrado!')
        return response
    }
    async getOneByID({ id }: Pick<Character, 'id'>): Promise<Character> {
        const response = await prisma.character.findFirst({where: {id}})
        if (!response) throw new AppError('Não encontrado!')
        return response
    }
}