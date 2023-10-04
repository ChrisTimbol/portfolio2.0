import Post from '@/components/Post';

export default function PostLoop({ posts }) {
    return (
        <>
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li className="h-60" key={post?.id}>
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
        </>
    );
}