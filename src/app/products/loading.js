export default function Loading() {
	return (
		<section className="animate-pulse" style={{ animationDuration: "1.2s" }}>
			<div className="mb-8 space-y-3">
				<div className="h-4 w-24 rounded-full bg-gray-200" />
				<div className="h-10 w-72 max-w-full rounded-2xl bg-gray-200" />
				<div className="h-4 w-full max-w-2xl rounded-full bg-gray-200" />
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: 8 }).map((_, index) => (
					<div
						key={index}
						className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
					>
						<div className="h-60 bg-gray-100" />
						<div className="space-y-4 p-5">
							<div className="flex items-center justify-between gap-3">
								<div className="h-6 w-24 rounded-full bg-gray-200" />
								<div className="h-6 w-20 rounded-full bg-gray-200" />
							</div>

							<div className="space-y-2">
								<div className="h-5 w-full rounded-full bg-gray-200" />
								<div className="h-5 w-5/6 rounded-full bg-gray-200" />
								<div className="h-4 w-4/5 rounded-full bg-gray-200" />
							</div>

							<div className="flex items-center justify-between gap-4 pt-2">
								<div className="h-7 w-16 rounded-full bg-gray-200" />
								<div className="h-10 w-28 rounded-full bg-gray-200" />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
