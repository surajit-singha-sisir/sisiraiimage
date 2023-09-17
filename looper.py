import pyperclip

output = ""
for i in range(1, 13):
    html_code = '''
    <div class="img">
        <img src="cat-4/girl ({}).png" alt="Image {}" class="thumbnail">
        <div class="overlay">
            <span class="close-btn">&times;</span>
            <img src="cat-4/girl ({}).png" alt="Image {}" class="full-image zoomable">
        </div>
    </div>
    '''.format(i, i, i, i)
    
    output += html_code

# Copy the output to the clipboard
pyperclip.copy(output)