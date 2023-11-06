import { CommonModule } from " .. /common/common.module";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from ". /discountEditor.component";
import { ProductFormComponent } from "./productForm. component";
import { ProductTableComponent } from "../productTable. component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [],
    exports: []
export class ComponentModule {}