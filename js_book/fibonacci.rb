require 'pry'

def fibonacci(num)
    return num if num < 2
    fibonacci(num - 1) + fibonacci(num - 2)
end

p fibonacci(6)



