var config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URL
    },
    default:{
        SECRET: 'ABCABC',
        DATABASE: 'mongodb://localhost:27017/bookShelf'
    }
}

exports.get = function get(env){
    return config[env] || config.default
}