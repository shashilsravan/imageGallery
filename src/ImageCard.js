import React from 'react'

function ImageCard({ image }) {
    const tags = image.tags.split(',')
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image.webformatURL} />
            <div className="px-6 py-4">
            <div className="font-bold text-purple-600 text-xl mb-2">
                Photo by {image.user}
            </div>
            <ul className="mb-5">
                <li>
                <strong>Views: </strong> {image.views}
                </li>
                <li>
                <strong>Favourites: </strong> {image.favorites}
                </li>
                <li>
                <strong>Downloads: </strong> {image.downloads}
                </li>
                <li>
                <strong>Likes: </strong> {image.likes}
                </li>
            </ul>
            <a target="_blank" className="bg-transaparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-20 border border-blue-500 hover:border-transparent rounded-full" href={image.pageURL}>Download Image</a>
            </div>
            <div className="px-6 py-4">
            {tags.map((tag, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2">
                {tag}
            </span>)}
            </div>
        </div>
        </div>
    )
}

export default ImageCard
