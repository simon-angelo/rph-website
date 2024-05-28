import React from 'react';

import Image from 'next/image';
import { bayon } from '@/styles/fonts';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const CardTypeB = ({
	className,
	imagePath,
	title,
	description,
}: {
	className?: string;
	imagePath: string;
	title: string;
	description: string[];
}) => {
	return (
		<Card
			className={cn(
				'bg-transparent border-none flex flex-col h-full',
				className
			)}
		>
			<div className="bg-transparent h-[200px] relative">
				<div className="absolute z-10 bottom-[-50%] translate-x-[50%] w-[50%] aspect-square rounded-md overflow-hidden">
					<Image
						src={imagePath}
						alt={title}
						fill
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				</div>
			</div>
			<div className="py-4 px-12 pt-24 bg-background-100 rounded-xl overflow-hidden shadow border-b-[20px] border-x-0 border-t-0 border-yellow-primary grow">
				<CardHeader className="pt-4 pb-2 px-0">
					<CardTitle
						className={`${bayon.variable} text-foreground font-display tracking-widest text-2xl`}
					>
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-0 px-0 ">
					<CardDescription className="text-lg">
						{description}
					</CardDescription>
				</CardContent>
			</div>
		</Card>
	);
};

export default CardTypeB;
