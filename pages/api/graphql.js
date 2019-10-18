import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from '../../graphql/apolloSchema'
import resolvers from '../../graphql/apolloResolvers'
import { connectDB } from '../../server/mongo'
import { auth } from '../../server/auth'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const db = await connectDB()
    const { isAuth, userId } = await auth(req)
    return {
      req,
      db,
      isAuth,
      userId
    }
  },
  introspection: true,
  playground: true
})

const app = express()

app.use(cors())

server.applyMiddleware({ app, path: "/api/graphql" })

export const config = {
  api: {
    bodyParser: false
  }
}

export default app