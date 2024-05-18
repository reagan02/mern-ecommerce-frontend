import Button from "../Components/Homepage/Button";
import ItemCard from "../Components/Homepage/ItemCard";

const Wishlist = () => {
	return (
		<div>
			<div className="">
				<div className="flex justify-between mt-16 items-center">
					<p className="text-2xl">Wishlist(4)</p>
					<Button
						title="Move All To Blog"
						height="4"
						textColor={"text-black"}
						bgColor={"bg-white"}
						border={"border-2"}
						width="16"
					/>
				</div>
				<div className="flex justify-between mt-10">
					<ItemCard
						image="https://m.media-amazon.com/images/I/61IU5NoMIaL.jpg"
						name="HAVIT HV-G92 Gamepad"
						price="$120"
						discount="-40%"
					/>
					<ItemCard
						image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBN6Ata5yKhgmCtE5fFlpsu8rTNzRqVFryIvuMFEv45fcTFtN00tl5wJWdT6LkQHwBORFKIPMwUxe9F-l98aNcO9E5BW9wA0oIzw29dielIOThgsLyppt8KA"
						name="Romoss mini Power Banks 2in1"
						price="$75"
						discount="-15%"
					/>
					<ItemCard
						image="https://lzd-img-global.slatic.net/g/p/2bf7d5377e94d0ba15ff02f560aa01aa.jpg_400x400q80.jpg"
						name="Case for iPhone 15"
						price="$6"
						discount="-3%"
					/>
					<ItemCard
						image="https://lzd-img-global.slatic.net/g/p/6f3e88e7d83bddcfc5f6d08de124d406.jpg_400x400q75.jpg_.webp"
						name="YN SHEESH Graphic-tees"
						price="$90"
						discount="-10%"
					/>
					<ItemCard
						image="https://lzd-img-global.slatic.net/g/ff/kf/S2d754a35996a4e82b90049212495ebaa5.jpg_400x400q75.jpg_.webp"
						name="AXEGN PLAIN TSHIRT UNISEX"
						price="$40"
						discount="-5%"
					/>
				</div>
			</div>
		</div>
	);
};

export default Wishlist;
