/*라우팅*/
import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import LoginContainer from "../pages/login/LoginContainer";
import JoinContainer from "../pages/join/JoinContainer";
import JoinType from "../pages/join/JoinType";
import JoinPhone from "../pages/join/JoinPhone";
import JoinComplete from "../pages/join/JoinComplete";
import SellerJoin from "../pages/join/SellerJoin";
import Join from "../pages/join/Join";
import FindAccountContainer from "../pages/findAccount/FindAccountContainer";
import SellerLayout from "../pages/sellerLayout/SellerLayout";
import SellerProductContainer from "../pages/seller/sellerProduct/SellerProductContainer";
import SellerProductList from "../pages/seller/sellerProduct/SellerProductList";
import SellerProductWrite from "../pages/seller/sellerProduct/SellerProductWrite";
import SellerProductUpdate from "../pages/seller/sellerProduct/SellerProductUpdate";
import SellerInfoContainer from "../pages/seller/sellerInfo/SellerInfoContainer";
import BusinessUpdate from "../pages/seller/sellerInfo/BusinessUpdate";
import SellerUpdate from "../pages/seller/sellerInfo/SellerUpdate";
import FindType from "../pages/findAccount/FindType";
import FindId from "../pages/findAccount/FindId";
import FindIdComplete from "../pages/findAccount/FindIdComplete";
import FindPassword from "../pages/findAccount/FindPassword";
import FindPasswordComplete from "../pages/findAccount/FindPasswordComplete";
import ProfileList from "../pages/myhome/myInfo/ProfileList";
import ProfileUpdate from "../pages/myhome/myInfo/ProfileUpdate";
import Notification from "../pages/myhome/myInfo/Notification";
import LikeList from "../pages/myhome/myInfo/LikeList";
import PasswordUpdate from "../pages/myhome/myInfo/PasswordUpdate";
import PasswordUpdateComplete from "../pages/myhome/myInfo/PasswordUpdateComplete";
import MyPetContainer from "../pages/myhome/myPet/MyPetContainer";
import PetList from "../pages/myhome/myPet/PetList";
import PetWrite from "../pages/myhome/myPet/PetWrite";
import ShoppingList from "../pages/myhome/myShopping/ShoppingList";
import Adjustment from "../pages/seller/sellerAdjustment/Adjustment";
import SellerRevenueList from "../pages/seller/sellerRevenue/SellerRevenueList";
import SellerOrderList from "../pages/seller/sellerOrder/SellerOrderList";
import PetsonalContainer from "../pages/petsonal/PetsonalContainer";
import PetsonalMain from "../pages/petsonal/PetsonalMain";
import PetsonalTest from "../pages/petsonal/PetsonalTest";
import PetsonalResult from "../pages/petsonal/PetsonalResult";
import ProductContainer from "../pages/store/product/ProductContainer";
import ProductDetail from "../pages/store/product/ProductDetail";
import SellerProductView from "../pages/store/product/SellerProductView";
import StoreContainer from "../pages/store/store/StoreContainer";
import StoreMain from "../pages/store/store/StoreMain";
import Cart from "../pages/store/cart/Cart";
import CommunityContainer from "../pages/community/community/CommunityContainer";
import CommunityMain from "../pages/community/community/CommunityMain";
import PostContainer from "../pages/community/post/PostContainer";
import PostList from "../pages/community/post/PostList";
import PostOrangeList from "../pages/community/post/PostOrangeList";
import PostGoldList from "../pages/community/post/PostGoldList";
import PostGradationList from "../pages/community/post/PostGradationList";
import PostLightPurpleList from "../pages/community/post/PostLightPurpleList";
import PostDeepPurPleList from "../pages/community/post/PostDeepPurPleList";
import MyPost from "../pages/community/post/MyPost";
import MyPostList from "../pages/community/post/MyPostList";
import OthersPost from "../pages/community/post/OthersPost";
import OthersPostList from "../pages/community/post/OthersPostList";
import PostUpdate from "../pages/community/post/PostUpdate";
import PostWrite from "../pages/community/post/PostWrite";
import AdminLogin from "../pages/admin/adminLogin/AdminLogin";
import BannerContainer from "../pages/admin/banner/BannerContainer";
import BannerList from "../pages/admin/banner/BannerList";
import BannerWrite from "../pages/admin/banner/BannerWrite";
import BannerUpdate from "../pages/admin/banner/BannerUpdate";
import CouponContainer from "../pages/admin/coupon/CouponContainer";
import CouponList from "../pages/admin/coupon/CouponList";
import CouponWrite from "../pages/admin/coupon/CouponWrite";
import CouponUpdate from "../pages/admin/coupon/CouponUpdate";
import MemberContainer from "../pages/admin/member/MemberContainer";
import BuyerList from "../pages/admin/member/BuyerList";
import SellerList from "../pages/admin/member/SellerList";
import UnsubscribeContainer from "../pages/unsubscribe/UnsubscribeContainer";
import Unsubscribe from "../pages/unsubscribe/Unsubscribe";
import UnsubscribeComplete from "../pages/unsubscribe/UnsubscribeComplete";
import AdminLayout from "../pages/adminLayout/AdminLayout";
import MyInfoContainer from "../pages/myhome/myInfo/MyInfoContainer";
import PayContainer from "../pages/store/pay/PayContainer";
import Pay from "../pages/store/pay/Pay";
import PaySuccess from "../pages/store/pay/PaySuccess";
import PayFailed from "../pages/store/pay/PayFailed";
import NoticeContainer from "../pages/admin/notice/NoticeContainer";
import NoticeList from "../pages/admin/notice/NoticeList";
import NoticeUpdate from "../pages/admin/notice/NoticeUpdate";
import NoticeWrite from "../pages/admin/notice/NoticeWrite";
import SellerLogin from "../pages/login/SellerLogin";
import StoreCatContainer from "../pages/store/store/cat/StoreCatContainer";
import Flushie from "../pages/store/store/cat/Flushies";
import Treat from "../pages/store/store/cat/Treats";
import Cloth from "../pages/store/store/cat/Clothes";
import HealthCares from "../pages/store/store/cat/HealthCare";
import StoreDogContainer from "../pages/store/store/dog/StoreDogContainer";
import Flushies from "../pages/store/store/dog/Flushies";
import Treats from "../pages/store/store/dog/Treats";
import Clothes from "../pages/store/store/dog/Clothes";
import HealthCare from "../pages/store/store/dog/HealthCare";

const router = createBrowserRouter( [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainContainer />
            },
            {
                path: '/myhome',
                element: <MyInfoContainer />,
                children : [
                    {
                        index: true,
                        element: <ProfileList />,
                    },
                    {
                        path: "profile-update",
                        element: <ProfileUpdate />
                    },
                    {
                        path: "notification",
                        element: <Notification />
                    },
                    {
                        path: "likes",
                        element: <LikeList />
                    },
                    {
                        path: "password-update",
                        element: <PasswordUpdate />
                    },
                ]
            },
            {
                path: '/my-pet',
                element: <MyPetContainer />,
                children : [
                    {
                        index: true,
                        element: <PetList />
                    },
                    {
                        path: "pet-write",
                        element: <PetWrite />
                    },
                    ]
            },
            {
                path:'/my-shopping',
                element: <ShoppingList />
            },
            {
                path: '/petsonal',
                element: <PetsonalContainer />,
                children : [
                    {
                        index: true,
                        element: <PetsonalMain />,
                    },
                    {
                        path: "test",
                        element: <PetsonalTest />,
                    },
                    {
                        path: "result",
                        element: <PetsonalResult />,
                    },
                    ]
            },
            {
                path: '/product',
                element: <ProductContainer />,
                children : [
                    {
                        index: true,
                        element: <ProductDetail />
                    },
                    {
                        path: "seller-product-view",
                        element: <SellerProductView />
                    },
                ]
            },
            {
                path: '/store',
                element: <StoreContainer />,
                children : [
                    {
                        index: true,
                        element: <StoreMain />
                    },
                ]
            },
            {
                path: '/store-dog',
                element: <StoreDogContainer />,
                children : [
                    {
                        index: true,
                        element: <Flushies />
                    },
                    {
                        path: 'treats',
                        element: <Treats />
                    },
                    {
                        path: 'clothes',
                        element: <Clothes />
                    },
                    {
                        path: 'health-care',
                        element: <HealthCare />
                    },
                ]
            },
            {
                path: '/store-cat',
                element: <StoreCatContainer />,
                children : [
                    {
                        index: true,
                        element: <Flushie />
                    },
                    {
                        path: 'treats',
                        element: <Treat />
                    },
                    {
                        path: 'clothes',
                        element: <Cloth />
                    },
                    {
                        path: 'health-care',
                        element: <HealthCares />
                    },
                ]
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/pay',
                element: <PayContainer />,
                children : [
                    {
                        index : true,
                        element : <Pay />
                    },
                    {
                        path : 'success',
                        element : <PaySuccess />
                    },
                    {
                        path : 'failed',
                        element : <PayFailed />
                    },
                ]
            },
            {
                path: '/community',
                element: <CommunityContainer />,
                children : [
                    {
                        index: true,
                        element: <CommunityMain />,
                    }
                    ]
            },
            {
                path: '/post',
                element: <PostContainer />,
                children : [
                    {
                        index: true,
                        element: <PostList />,
                    },
                    {
                        path: "orange",
                        element: <PostOrangeList />,
                    },
                    {
                        path: "gold",
                        element: <PostGoldList />,
                    },
                    {
                        path: "gradation",
                        element: <PostGradationList />,
                    },
                    {
                        path: "light-purple",
                        element: <PostLightPurpleList />,
                    },
                    {
                        path: "deep-purple",
                        element: <PostDeepPurPleList />,
                    },
                    {
                        path: "my-post",
                        element: <MyPost />,
                    },
                    {
                        path: "my-post-list",
                        element: <MyPostList />,
                    },
                    {
                        path: "write",
                        element: <PostWrite />,
                    },
                    {
                        path: "update",
                        element: <PostUpdate />,
                    },
                    {
                        path: "others-post",
                        element: <OthersPost />,
                    },
                    {
                        path: "others-post-list",
                        element: <OthersPostList />,
                    },
                ]
            },
            {
                path: '/unsubscribe',
                element: <UnsubscribeContainer />,
                children : [
                    {
                        index: true,
                        element: <Unsubscribe />
                    }
                ]
            },
        ]
    },
    {
        path: '/admin',
        element : <AdminLayout />,
        children : [
            {
                path : '/admin',
                element: <NoticeContainer />,
                children : [
                    {
                        index: true,
                        element: <NoticeList />
                    },
                    {
                        path : 'update',
                        element: <NoticeUpdate />
                    },
                    {
                        path : 'write',
                        element: <NoticeWrite />
                    },
                ]
            },
            {
                path: 'banner',
                element: <BannerContainer />,
                children : [
                    {
                        index: true,
                        element: <BannerList />
                    },
                    {
                        path: "banner-write",
                        element: <BannerWrite />
                    },
                    {
                        path: "banner-update",
                        element: <BannerUpdate />
                    },
                ]
            },
            {
                path: 'coupon',
                element: <CouponContainer />,
                children : [
                    {
                        index: true,
                        element: <CouponList />
                    },
                    {
                        path: "coupon-write",
                        element: <CouponWrite />
                    },
                    {
                        path: "coupon-update",
                        element: <CouponUpdate />
                    },
                ]
            },
            {
                path: 'member',
                element: <MemberContainer />,
                children : [
                    {
                        index: true,
                        element: <BuyerList />
                    },
                    {
                        path: "seller-list",
                        element: <SellerList />
                    },
                ]
            },
        ]
    },
    {
        path: '/seller',
        element : <SellerLayout />,
        children : [
            {
                path: '/seller',
                element: <SellerProductContainer />,
                children : [
                    {
                        index: true,
                        element: <SellerProductList />,
                    },
                    {
                        path: "product-write",
                        element: <SellerProductWrite />,
                    },
                    {
                        path: "product-update",
                        element: <SellerProductUpdate />,
                    },
                ]
            },
            {
                path: 'seller-info',
                element: <SellerInfoContainer />,
                children : [
                    {
                        index: true,
                        element: <SellerUpdate />,
                    },
                    {
                        path: "business-update",
                        element: <BusinessUpdate />,
                    },
                ]
            },
            {
                path: 'seller-adjustment',
                element: <Adjustment />,
            },
            {
                path: 'seller-revenue',
                element: <SellerRevenueList />,
            },
            {
                path: 'seller-order',
                element: <SellerOrderList />,
            },
        ]
    },
    {
        path: '/admin-login',
        element: <AdminLogin />
    },
    {
        path: '/login',
        element: <LoginContainer />,
        children : [
            {
                index : true,
                element: <Login />,
            },
            {
                path : 'seller',
                element: <SellerLogin />,
            }
        ]
    },
    {
        path: '/join',
        element: <JoinContainer />,
        children : [
            {
                index : true,
                element: <JoinType />,
            },
            {
                path : "phone",
                element: <JoinPhone />,
            },
            {
                path : "complete",
                element: <JoinComplete />,
            },
            {
                path : "seller-join",
                element: <SellerJoin />,
            },
            {
                path : "buyer-join",
                element: <Join />,
            },

        ]
    },
    {
        path: '/find',
        element: <FindAccountContainer />,
        children : [
            {
                index: true,
                element: <FindType />,
            },
            {
                path: "find-id",
                element: <FindId />,
            },
            {
                path: "findId-complete",
                element: <FindIdComplete />,
            },
            {
                path: "find-password",
                element: <FindPassword />,
            },
            {
                path: "findPassword-complete",
                element: <FindPasswordComplete />,
            },
            ]
    },
    {
        path: "/myhome/password-update-complete",
        element: <PasswordUpdateComplete />
    },
    {
        path: "/unsubscribe/complete",
        element: <UnsubscribeComplete />
    },
    {
        path: '*',
        element: <NotFound/>
    }
],
{
    future: {
        v7_fetcherPersist : true,
        v7_normalizeFormMethod : true,
        v7_partialHydration : true,
        v7_relativeSplatPath : true,
        v7_skipActionErrorRevalidation : true,
        v7_startTransition : true
    },
}
)

export default router