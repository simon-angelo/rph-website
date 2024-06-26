import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';

import CardtypeA from '@/components/content/card-type-a';
import CardHighlight from '@/components/content/card-highlight';
import Header from '@/components/content/header';

import { getData } from '@/lib/get-data';
import { DataTypes } from '@/types';

const Festivals = async () => {
	const data = await getData(DataTypes.festivals);

	console.log(data);

	const renderFestivalSequence = () => {
		const postsSequence = [];

		const highlightsCount = data.data.highlights.length;
		const regularsCount = data.data.regulars.length;
		const minCount = Math.min(highlightsCount, Math.ceil(regularsCount / 4));

		let highlightsIndex = 0;
		let regularsIndex = 0;

		for (let i = 0; i < minCount; i++) {
			if (highlightsIndex < highlightsCount) {
				postsSequence.push(
					<CardHighlight
						title={data.data.highlights[highlightsIndex].title}
						description={data.data.highlights[highlightsIndex].details}
						imagePath={data.data.highlights[highlightsIndex].image}
						pill={data.data.highlights[highlightsIndex].pillData}
						key={data.data.highlights[highlightsIndex].title}
					/>
				);
			}
			highlightsIndex++;

			const regularPostsGroup = [];
			for (let j = 0; j < 4; j++) {
				if (regularsIndex < regularsCount) {
					regularPostsGroup.push(
						<CardtypeA
							title={data.data.regulars[regularsIndex].title}
							description={data.data.regulars[regularsIndex].details}
							imagePath={data.data.regulars[regularsIndex].image}
							pill={data.data.regulars[regularsIndex].pillData}
							key={data.data.regulars[regularsIndex].title}
						/>
					);
					regularsIndex++;
				}
			}

			if (regularPostsGroup.length > 0) {
				postsSequence.push(
					<div
						className={cn(
							'w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6',
							screenBreakpoints
						)}
						key={regularsIndex}
					>
						{regularPostsGroup}
					</div>
				);
			}
		}

		while (highlightsIndex < highlightsCount) {
			postsSequence.push(
				<CardHighlight
					title={data.data.highlights[highlightsIndex].title}
					description={data.data.highlights[highlightsIndex].details}
					imagePath={data.data.highlights[highlightsIndex].image}
					pill={data.data.highlights[highlightsIndex].pillData}
					key={data.data.highlights[highlightsIndex].title}
				/>
			);
			highlightsIndex++;
		}

		if (regularsIndex < regularsCount) {
			const regularPostsGroup = [];
			while (regularsIndex < regularsCount) {
				if (regularsIndex < regularsCount) {
					regularPostsGroup.push(
						<CardtypeA
							title={data.data.regulars[regularsIndex].title}
							description={data.data.regulars[regularsIndex].details}
							imagePath={data.data.regulars[regularsIndex].image}
							pill={data.data.regulars[regularsIndex].pillData}
							key={data.data.regulars[regularsIndex].title}
						/>
					);
					regularsIndex++;
				}
			}

			postsSequence.push(
				<div
					className={cn(
						'w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6',
						screenBreakpoints
					)}
					key={regularsIndex}
				>
					{regularPostsGroup}
				</div>
			);
		}

		return postsSequence;
	};

	return (
		<article className="bg-background-200 pb-[500px]">
			<Header
				className="mb-14"
				title={data.title}
				description={data.description}
			/>
			<div className="flex flex-col gap-14">
				{/* <CardHighlight />
				<div
					className={cn(
						'w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6',
						screenBreakpoints
					)}
				>
					<CardtypeA />
					<CardtypeA />
					<CardtypeA />
					<CardtypeA />
				</div> */}
				{renderFestivalSequence()}
			</div>
		</article>
	);
};

export default Festivals;
