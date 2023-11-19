import SkeletonCard from "../search/_components/SkeletonCard";

const loadingLanguages = () => {
	return (
		<main>
			<div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-10'>
				{'abcdefgh'.split('').map((i) => (
					<SkeletonCard key={i} />
				))}
			</div>
		</main>
	);
};
export default loadingLanguages;
