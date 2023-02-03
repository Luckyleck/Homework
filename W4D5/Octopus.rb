array = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

p array.max_by {|ele| ele.length} #O(n^2)
p array.sort_by {|ele| ele.length}.last #O(n log n)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up"]


def slow_dance(move, array)

    array.index(move)

end

p slow_dance("up", tiles_array) # 0

p slow_dance("right-down", tiles_array) # 3


# Constant dance

hash = {"up" => 0, "right-up" => 1, "right" => 2, "right-down" => 3, "down" => 4, "left-down" => 5, "left" => 6, "left-up" => 7}

def fast_dance(move, hash)

    hash[move]

end

p fast_dance("up", hash)
#> 0

p fast_dance("right-down", hash)
#> 3