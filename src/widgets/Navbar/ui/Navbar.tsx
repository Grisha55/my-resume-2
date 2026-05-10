import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { memo } from 'react';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	
	return (
		<ToggleFeatures 
			feature="isAppRedesigned"
			on={
				<header>
					<HStack gap='16'>
						<button>Tap tap tap</button>
					</HStack>
				</header>
			}
			off={
				<header>
					<Text title='Its my app in final state' />
				</header>
			}
		/>
	)
})

Navbar.displayName = 'Navbar';