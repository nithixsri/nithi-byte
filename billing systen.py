import tkinter as tk

root = tk.Tk()
root.title("Hotel Bill System")
root.geometry("600x500")
root.configure(bg="white")

total_amount = 0

# ===== functions =====
def add_item(price):
    global total_amount
    total_amount += price
    total_box.config(text=f"₹ {total_amount}")

def reset_bill():
    global total_amount
    total_amount = 0
    total_box.config(text="₹ 0")

# ===== HEADINGS =====
menu_label = tk.Label(root, text="MENU",
                      font=("Arial", 18, "bold"),
                      bg="lightblue",
                      width=15)
menu_label.grid(row=0, column=0, padx=20, pady=10)

cost_label = tk.Label(root, text="COST",
                      font=("Arial", 18, "bold"),
                      bg="gray",
                      fg="white",
                      width=10)
cost_label.grid(row=0, column=1, padx=40, pady=10)

# ===== MENU ITEMS =====
menu_items = [
    ("Fresher", 60),
    ("Shewerm", 120),
    ("Momose", 90),
    ("Mojito", 70),
    ("Burger", 110),
    ("Pizza", 150),
    ("Brownie", 80),
    ("Icecream", 50)
]

row_no = 1
for item, price in menu_items:

    btn = tk.Button(root,
                    text=item,
                    font=("Arial", 12, "bold"),
                    width=15,
                    command=lambda p=price: add_item(p))
    btn.grid(row=row_no, column=0, pady=5)

    cost = tk.Label(root,
                    text=f"₹ {price}",
                    font=("Arial", 12, "bold"),
                    bg="white")
    cost.grid(row=row_no, column=1)

    row_no += 1

# ===== TOTAL LABEL =====
total_label = tk.Label(root,
                       text="TOTAL",
                       font=("Arial", 14, "bold"),
                       bg="blue",
                       fg="white",
                       width=15)
total_label.grid(row=row_no, column=0, pady=20)

# ===== TOTAL BOX =====
total_box = tk.Label(root,
                     text="₹ 0",
                     font=("Arial", 14, "bold"),
                     relief="solid",
                     width=10,
                     height=2)
total_box.grid(row=row_no, column=1)

# ===== RESET BILL (TOTAL KU KELA) =====
reset_btn = tk.Button(root,
                      text="RESET BILL",
                      font=("Arial", 12, "bold"),
                      bg="red",
                      fg="white",
                      width=15,
                      command=reset_bill)
reset_btn.grid(row=row_no+1, column=0, columnspan=2, pady=10)

root.mainloop()
