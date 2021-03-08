import db, { FindManyPostArgs } from "db"

type GetPostsInput = {
  where?: FindManyPostArgs["where"]
  orderBy?: FindManyPostArgs["orderBy"]
  cursor?: FindManyPostArgs["cursor"]
  take?: FindManyPostArgs["take"]
  skip?: FindManyPostArgs["skip"]
  // Only available if a model relationship exists
  include?: FindManyPostArgs["include"]
}

export default async function getPosts(
  { where, orderBy, cursor, take, skip, include }: GetPostsInput,
  ctx: Record<any, any> = {}
) {
  const getPosts = await db.post.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
    include,
  })

  return getPosts
}
