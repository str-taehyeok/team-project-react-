/*라우팅*/
import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import LoginContainer from "../pages/login/LoginContainer";
import JoinContainer from "../pages/join/JoinContainer";
import JoinType from "../pages/join/JoinType";
import JoinPhone from "../pages/join/JoinPhone";
import JoinComplete from "../pages/join/JoinComplete";
import Join from "../pages/join/Join";
import FindAccountContainer from "../pages/findAccount/FindAccountContainer";
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
import StoreDog from "../pages/store/store/StoreDog";
import StoreCat from "../pages/store/store/StoreCat";
import Cart from "../pages/store/cart/Cart";
import Purchase from "../pages/store/purchase/Purchase";
import CommunityContainer from "../pages/community/community/CommunityContainer";
import CommunityMain from "../pages/community/community/CommunityMain";
import CommunityIntro from "../pages/community/community/CommunityIntro";
import PostContainer from "../pages/community/post/PostContainer";
import PostList from "../pages/community/post/PostList";
import MyPost from "../pages/community/post/MyPost";
import MyPostList from "../pages/community/post/MyPostList";
import OthersPost from "../pages/community/post/OthersPost";
import OthersPostList from "../pages/community/post/OthersPostList";
import PostUpdate from "../pages/community/post/PostUpdate";
import PostWrite from "../pages/community/post/PostWrite";
import AdminLogin from "../pages/admin/adminLogin/AdminLogin";
import AnnouncementContainer from "../pages/admin/announcement/AnnouncementContainer";
import AnnouncementList from "../pages/admin/announcement/AnnouncementList";
import AnnouncementUpdate from "../pages/admin/announcement/AnnouncementUpdate";
import AnnouncementWrite from "../pages/admin/announcement/AnnouncementWrite";
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

const router = createBrowserRouter( [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Main/>
            },
            {
                path: '/login',
                element: <LoginContainer />,
                children : [
                    {
                        index : true,
                        element: <Login />,
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
                        path : "register",
                        element: <Join />,
                    },

                ]
            },
            {
                path: '/findAccount',
                element: <FindAccountContainer />,
                children : [
                    {
                        index: true,
                        element: <FindType />,
                    },
                    {
                        path: "findId",
                        element: <FindId />,
                    },
                    {
                        path: "findIdComplete",
                        element: <FindIdComplete />,
                    },
                    {
                        path: "findPassword",
                        element: <FindPassword />,
                    },
                    {
                        path: "findPasswordComplete",
                        element: <FindPasswordComplete />,
                    },
                    ]
            },
            {
                path: '/myhome',
                element: <FindAccountContainer />,
                children : [
                    {
                        index: true,
                        element: <ProfileList />,
                    },
                    {
                        path: "profileUpdate",
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
                        path: "passwordUpdate",
                        element: <PasswordUpdate />
                    },
                    {
                        path: "passwordUpdateComplete",
                        element: <PasswordUpdateComplete />
                    },
                    ]
            },
            {
                path: '/myPet',
                element: <MyPetContainer />,
                children : [
                    {
                        index: true,
                        element: <PetList />
                    },
                    {
                        path: "petWrite",
                        element: <PetWrite />
                    },
                    ]
            },
            {
                path:'/myShopping',
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
                        path: "sellerProductView",
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
                    {
                        path: "dog",
                        element: <StoreDog />
                    },
                    {
                        path: "cat",
                        element: <StoreCat />
                    },
                ]
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/purchase',
                element: <Purchase/>,
            },
            {
                path: '/community',
                element: <CommunityContainer />,
                children : [
                    {
                        index: true,
                        element: <CommunityMain />,
                    },
                    {
                        path: "intro",
                        element: <CommunityIntro />,
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
                        path: "myPost",
                        element: <MyPost />,
                    },
                    {
                        path: "myPostList",
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
                        path: "othersPost",
                        element: <OthersPost />,
                    },
                    {
                        path: "othersPostList",
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
                    },
                    {
                        path: "complete",
                        element: <UnsubscribeComplete />
                    },
                ]
            },

        ]
    },
    {
        path: '/admin',
        element : <AdminLayout />,
        children : [
            {
                path: '/announcement',
                element: <AnnouncementContainer />,
                children : [
                    {
                        index: true,
                        element: <AnnouncementList />
                    },
                    {
                        path: "AnnouncementWrite",
                        element: <AnnouncementWrite />
                    },
                    {
                        path: "AnnouncementUpdate",
                        element: <AnnouncementUpdate />
                    },
                ]
            },
            {
                path: '/banner',
                element: <BannerContainer />,
                children : [
                    {
                        index: true,
                        element: <BannerList />
                    },
                    {
                        path: "bannerWrite",
                        element: <BannerWrite />
                    },
                    {
                        path: "bannerUpdate",
                        element: <BannerUpdate />
                    },
                ]
            },
            {
                path: '/coupon',
                element: <CouponContainer />,
                children : [
                    {
                        index: true,
                        element: <CouponList />
                    },
                    {
                        path: "couponWrite",
                        element: <CouponWrite />
                    },
                    {
                        path: "couponUpdate",
                        element: <CouponUpdate />
                    },
                ]
            },
            {
                path: '/member',
                element: <MemberContainer />,
                children : [
                    {
                        index: true,
                        element: <BuyerList />
                    },
                    {
                        path: "sellerList",
                        element: <SellerList />
                    },
                ]
            },
            {
                path: '/sellerProduct',
                element: <SellerProductContainer />,
                children : [
                    {
                        index: true,
                        element: <SellerProductList />,
                    },
                    {
                        path: "productWrite",
                        element: <SellerProductWrite />,
                    },
                    {
                        path: "productUpdate",
                        element: <SellerProductUpdate />,
                    },
                ]
            },
            {
                path: '/sellerInfo',
                element: <SellerInfoContainer />,
                children : [
                    {
                        index: true,
                        element: <SellerUpdate />,
                    },
                    {
                        path: "businessUpdate",
                        element: <BusinessUpdate />,
                    },
                ]
            },
            {
                path: '/sellerAdjustment',
                element: <Adjustment />,
            },
            {
                path: '/sellerRevenue',
                element: <SellerRevenueList />,
            },
            {
                path: '/sellerOrder',
                element: <SellerOrderList />,
            },
        ]
    },
    {
        path: '/adminLogin',
        element: <AdminLogin />
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router