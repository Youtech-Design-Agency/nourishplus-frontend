import { SubscriptionPackageInterface } from "./package";

interface SubscriptionPackages{
    variant: 'primary' | 'secondary',
    subscriptionPackage: SubscriptionPackageInterface
}

export const subscriptionPackages: SubscriptionPackages[] = [
    {
        variant: 'primary',
        subscriptionPackage: {
            packageType: 'Basic Basket',
            subscriptionPackages: ['1 Bucket of rice', '1 Bucket of beans', '1 Packet of semo (1kg)', '2 Packet of spaghetti', '1 Bucket of white garri', '1 Packet of maggi chicken cubes ']
        }
    },
    {
        variant: 'secondary',
        subscriptionPackage: {
            packageType: 'Premium Basket',
            subscriptionPackages: ['2 Bucket of rice', '2 Bucket of beans', '2 Packet of semo (1kg)', '3 Packet of spaghetti', '4 Bucket of white garri', '5 Packet of maggi chicken cubes ']
        }
    },
    {
        variant: 'primary',
        subscriptionPackage: {
            packageType: 'Standard Basket',
            subscriptionPackages: ['1 Bucket of rice', '1 Bucket of beans', '1 Packet of semo (1kg)', '2 Packet of spaghetti', '1 Bucket of white garri', '1 Packet of maggi chicken cubes ']
        }
    }
]