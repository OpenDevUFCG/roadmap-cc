const githubApi = "htttps://api.github.com";
const MEMBERS_CACHE_NAME = "roadmap-collaborators"

const getMembers = async () => {
    const membersUrl = `${githubApi}/repos/OpenDevUFCG/roadmap-cc/collaborators`
    const cache = await caches.open(MEMBERS_CACHE_NAME)

    let membersResponse = await cache.match(membersUrl)

    return membersResponse.json()
}

console.warn(getMembers())