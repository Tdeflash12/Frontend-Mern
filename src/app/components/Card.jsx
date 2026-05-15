export default function Card({
	title,
	category,
	image,
	price,
	rating,
	description,
	actionLabel = "Add to cart",
}) {
	return (
		<article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
			<div className="relative flex h-60 items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-6">
				{image ? (
					<img
						src={image}
						alt={title}
						className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/70 text-sm font-medium text-gray-400">
						No image available
					</div>
				)}
			</div>

			<div className="space-y-4 p-5">
				<div className="flex items-center justify-between gap-3">
					<span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
						{category}
					</span>
					<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
						{rating} rating
					</span>
				</div>

				<div className="space-y-2">
					<h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-700">
						{title}
					</h3>
					<p className="line-clamp-3 text-sm leading-6 text-gray-600">
						{description}
					</p>
				</div>

				<div className="flex items-center justify-between gap-4 pt-2">
					<span className="text-xl font-bold text-gray-900">${price}</span>
					<button
						type="button"
						className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
					>
						{actionLabel}
					</button>
				</div>
			</div>
		</article>
	);
}
