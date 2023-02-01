class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @seq = []
    @sequence_length = 1
    @game_over = false
  end

  def play

    until !@game_over
      take_turn
    end
      

  end

  def take_turn
      show_sequence
      require_sequence
      @sequence_length += 1
      round_success_message
  end
    

  end

  def show_sequence

    add_random_color
    seconds = 0.0
    @seq.each do |color|
      puts color
      system "clear"
      seconds += 0.8
    end

    sleep(seconds)
    system "clear"


  end

  def require_sequence

    puts "Please repeat the sequence, type the color and press enter"
    @seq.each do |color|
      input = gets.chomp.strip.downcase
      if input == color
        puts "correct"
        sleep(0.2)
      else
        game_over_message
      end
    end
    
  end

  def add_random_color

    @seq << COLORS.sample

  end

  def round_success_message

    puts "Well done!"

  end

  def game_over_message
    begin
    puts "Oof, better luck next time!"
    puts
    puts "Would you like to play again? Y/N"
    input = gets.chomp.strip.downcase
    case input
    when "y"
      reset_game
      play
    when "n"
      puts "Thanks for playing, bye"
      exit
    end
    rescue
      puts "Invalid input"
      retry
  end

  def reset_game

    @sequence = []
    @game_over = false
    @sequence_length = 1

  end

end


game = Simon.new
game.play