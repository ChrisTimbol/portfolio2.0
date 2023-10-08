import Post from '@/components/Post';

export default function PostLoop({ posts }) {
    return (
        <ul className="grid grid-cols-1 gap-x-4 sm:grid-cols-2   ">
            {posts.map((post) => (
                <li key={post?.id}>
                    <Post
                        title={post?.title?.rendered}
                        thumbnail={post?._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                        excerpt={post?.excerpt?.rendered}
                        slug={post?.slug}
                        date={post?.date}
                    />
                </li>
            ))}
        </ul>
    );
}
